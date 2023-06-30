const isAnagram = (s, t) => {
    
    s = s.split("").sort().join()
    t = t.split("").sort().join()
    
    if (s !== t) {
        return false
    }
    
    return true
} 