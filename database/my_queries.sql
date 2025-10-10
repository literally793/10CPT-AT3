-- database: ./data_source.db

SELECT * FROM files
WHERE file_saved='no';

SELECT * FROM files
WHERE file_tags='photography';

SELECT file_name
FROM files;

SELECT * FROM main_user
ORDER BY username DESC;

SELECT * FROM files
WHERE date = '12/06/2025' OR date = '04/08/2024';
