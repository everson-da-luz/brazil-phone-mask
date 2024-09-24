let phoneMaskElements = document.getElementsByClassName('brazil-phone-mask');

for (let phoneMask of phoneMaskElements) {
    phoneMask.addEventListener("keyup", function(event) {
        this.value = this.value.replace(/\D/g, '');

        if (this.value.length > 13) {
            this.value = this.value.substring(0, 13);
        }

        this.value = this.value.replace(/^(\d{1})/, '+$1')
            .replace(/^\+(\d{2})(\d{1})/, '+$1 ($2')
            .replace(/^\+(\d{2}) \((\d{2})(\d{1})/, '+$1 ($2) $3')
            .replace(/^\+(\d{2}) \((\d{2})\) (\d{4})(\d+)/, function(match, p1, p2, p3, p4) {
                if (p4.length === 5) {
                    return '+' + p1 + ' (' + p2 + ') ' + (p3 + p4.substr(0, 1)) + '-' + p4.substr(1, 4); // +99 (99) 99999-9999
                } else {
                    return '+' + p1 + ' (' + p2 + ') ' + p3 + '-' + p4; // +99 (99) 9999-9999
                }
            });
    });
}