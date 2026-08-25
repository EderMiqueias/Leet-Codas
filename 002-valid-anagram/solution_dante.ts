function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) return false;
    
    const lettersCount = new Map<string, number>();

    for (const letter of s) {
        lettersCount.set(letter, (lettersCount.get(letter) ?? 0) + 1);
    }

    for (const letter of t) {
        if (!lettersCount.has(letter)) return false;

        const count = lettersCount.get(letter)! - 1;

        if (count < 0) return false;

        lettersCount.set(letter, count);
    }

    return true
};