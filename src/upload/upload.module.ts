import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, callback) => {
          const uploadPath = './uploads';
          // Créer le dossier s'il n'existe pas
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          callback(null, uploadPath);
        },
        filename: (req, file, callback) => {
          const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueName + extname(file.originalname));
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
      },
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|pdf)$/)) {
          return callback(new Error('Type de fichier non autorisé'), false);
        }
        callback(null, true);
      },
    }),
  ],
  exports: [MulterModule],
})
export class UploadModule {}
