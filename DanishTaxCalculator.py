# Salary
hourly_wage = 131.4
hours_worked_per_day = 8
days_worked_per_week = 5
weeks_per_year = 52

# Rates
su = 1004
basic_tax_rate = 0.1206
municipal_tax_rate = 0.234
church_tax_rate = 0.0089
personal_deduction = 49700
am_contribution_rate = 0.08
tax_ceiling = 0.5207
top_tax_threshold = 588900
top_tax_rate = 0.15

# Now the program starts
tax_paid = basic_tax_rate + municipal_tax_rate + church_tax_rate
max_tax_rate = tax_paid + top_tax_rate
total_hours = hours_worked_per_day * days_worked_per_week * weeks_per_year
gross_salary = total_hours * hourly_wage + su * 12

print("Tax before top tax is: ", tax_paid * 100, "%")
print("Tax after top tax is: ", max_tax_rate * 100, "%\n")
print("Total hours worked per year: ", total_hours, "and gross salary is: ", gross_salary, "kr")

without_am_contribution = gross_salary - (gross_salary * am_contribution_rate)
without_personal_deduction = without_am_contribution - personal_deduction
pays_top_tax = without_personal_deduction > top_tax_threshold

if pays_top_tax:
    top_tax_paid_by = without_personal_deduction - top_tax_threshold
    print("\n\nTop tax paid by: ", int(top_tax_paid_by), "kr")
    normal_tax_paid = top_tax_threshold - (top_tax_threshold * tax_paid)
    print("Normal tax paid by: ", int(top_tax_threshold), "kr")
    print("\nTop tax paid: ", int(top_tax_paid_by * max_tax_rate), "kr")
    print("Normal tax paid: ", int(top_tax_threshold * tax_paid), "kr\n")
    top_tax_paid = top_tax_paid_by - (top_tax_paid_by * max_tax_rate)
    money_after_tax = normal_tax_paid + top_tax_paid
    print("Money after tax: ", int(money_after_tax), "kr")
    print("\nMoney paid in tax: ", int(gross_salary - money_after_tax), "kr")
    print("Money after tax: ", int(money_after_tax), "kr")
else:
    money_after_tax = without_personal_deduction - (without_personal_deduction * tax_paid)+personal_deduction
    print("Money paid in tax: ", int(without_personal_deduction * tax_paid), "kr")
    print("\nMoney after tax: ", int(money_after_tax), "kr")
    print("Paid money in tax: ", int(without_personal_deduction * tax_paid), "kr")
