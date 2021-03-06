class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date
    this.credit = credit
    this.debit = debit
    this.balance = balance
  }

  is_credit() {
    return this.format(this.credit)
  }

  is_debit() {
    return this.format(this.debit)
  }

  format(amount) {
    return(amount != 0 ? amount.toString() + ".00 " : "")
  }

  date_format() {
    return `${this.date.getDate()}/${this.date.getMonth()+1}/${this.date.getFullYear()}`
  }

}
