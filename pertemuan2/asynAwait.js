function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Download selama 3 detik"); 
    }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Verify selama 2 detik");
    }, 2000);
});
}

function notify() {
    console.log("Download Selesai");
}

// keyword asyn memberi tahu bahwa ada operasi asynchrnous di dalamnya
async function main() {
    // solusi pengganti promise then cath bisa menggunakan asyn await
    console.log(await download());
    console.log(await verify());
    notify();
}

main();