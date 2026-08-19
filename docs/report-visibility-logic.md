# Report Visibility Logic — Harmonization of SOS

Per report type, written as plain IF → THEN rules. Three possible outcomes:

- ✅ **Show report** — available and openable.
- ⚠️ **Disable + message** — visible but not openable; clicking shows a *"Why this report is not available"* dialog with the quoted text.
- 🚫 **Show nothing** — not rendered in the list at all.

---

## 1. PowerPointReport, ExcelReport, OffboardingReport, OnboardingReport, ManagementReport

- No validation — **IF** the subscription product group includes it **THEN** ✅ show report.

---

## 2. ExcelWithPsyGbReport

*Needs high-level report download permission.*

- **IF** the user is on the top-level group → ✅ show report
- **ELSE IF** the user has top-level access but is in a lower-level group → ⚠️ disable + message: *"This report is only available for the top level groups"*
- **ELSE** (no top-level access) → 🚫 show nothing

---

## 3. AllGroupResultsExcelReport

*Needs high-level report download permission.*

- **IF** the user is on the top-level group (not an advanced filter) → ✅ show report
- **ELSE IF** the user has top-level access but is in a lower-level group or an advanced filter → ⚠️ disable + message: *"This report is only available for top level groups in a structure (not advanced filter)"*
- **ELSE** (no top-level access) → 🚫 show nothing

---

## 4. AnswerDistributionPowerPointReport

- **IF** the survey has at least one FivePoint-scale or AverageScore question → ✅ show report
- **ELSE** (no FivePoint-scale and no AverageScore question) → ⚠️ disable + message: *"Not available because the survey doesn't have five point questions or average score question"*

---

## 5. OnePagerReport

- **IF** the subscription is in the OnePager list **OR** the account has the `NonDeskWorkerEnabled` add-on → ✅ show report
- **ELSE** (neither) → 🚫 show nothing

---

## 6. AllCorrelationReport

*Needs high-level report download permission. Thresholds: response rate ≥ 60%, participants ≥ 50, respondents ≥ 30.*

- **IF** the subscription is not in the correlation list **AND** the account has no `SegmentingMergingResults` add-on → 🚫 show nothing
- **ELSE IF** the response rate/numbers are below the thresholds (can't calculate) → 🚫 show nothing
- **ELSE IF** it is calculated but the user is not on the top-level / inviting structure → ⚠️ disable + message: *"This report is only available for top level group in a structure (not advanced filter)"*
- **ELSE** → ✅ show report

---

## 7. WorldClassWorkPlaceReport

*Calculation requirements: eNPS question, Employership theme, participation ≥ 80%, response rate ≥ 60%, exactly 1 top-level group, default/primary hierarchy.*

- **IF** any calculation requirement fails (incl. response rate < 60% or multiple top-level groups) → 🚫 show nothing (not a WCWP survey)
- **ELSE IF** the user is on the inviting structure and the top-level group → ✅ show report
- **ELSE** (not on the inviting structure, or on it but in a lower-level group) → ⚠️ disable + message: *"This report is only available for the top group in the inviting structure"*

---

## 8. CrossingReport

- **IF** there is at least one visible Crossing / CrossingV2 comparison group with `CanShowScore = true` → ✅ show report
- **ELSE** (none) → ⚠️ disable + message: *"This report is only available if the survey has segments included"*

---

## 9. TrendAnalysisReport

- **IF** there are ≥ 2 accessible linked surveys **AND** at least one FivePoint-scale or AverageScore question → ✅ show report
- **ELSE** (fewer than 2 linked surveys, or no FivePoint-scale/AverageScore question) → ⚠️ disable + message: *"This report is only available if there is a previous survey linked to this survey and there are fivepoint questions or average score questions"*

---

## Clean-up notes

- **SfModelWithAnswerDistributionPowerPointReport** removed.
- **WCWP:** the original "response rate not matched" and "multiple top level groups" message dialogs are dropped — both are calculation requirements → 🚫 show nothing.
- **Crossing:** message says "segments included," but the real condition is visible Crossing/CrossingV2 comparison groups with `CanShowScore = true`. Align the wording.
- **Copy typos in dialogs:** "doesn't" (missing apostrophe), "eNPs", "fivepoint".
