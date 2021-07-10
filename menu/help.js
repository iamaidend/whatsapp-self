exports.Help = (prefix) => {
    return `
${prefix}quotes ? button
${prefix}random ? button
${prefix}hash ? generate sticker hash

${prefix}setfake ? setfake image
${prefix}setprefix ? setprefix text
${prefix}self ? set bot to private
${prefix}public ? set bot to public

Information:  cara menggunakan atau menambahkan case sticker command dengan cara reply sticker yg ingin di jadikan command dan berikan perintah ${prefix}hash lalu cek di console log dan copy kode yg diberikan, paste kode tersebut ke dalam case setelah switch (commandstik)
`
}