<?php
// ディレクトリ削除
function deleteDirectory($dir) {
    if (!file_exists($dir)) {
        return true;
    }
    if (!is_dir($dir)) {
        return unlink($dir);
    }
    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }
        if (!deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }
    }
    return rmdir($dir);
}

$directory = __DIR__ . "/backend";

var_dump(deleteDirectory($directory));


// ZIP解凍
$zip_file_name = __DIR__ . "/backend.zip";
$zip = new ZipArchive();
if ($zip->open($zip_file_name) !== true) exit('Open Error');
if ($zip->extractTo('./') !== true) exit('Extract Error');
$zip->close();
echo 'Unzip Complete';

