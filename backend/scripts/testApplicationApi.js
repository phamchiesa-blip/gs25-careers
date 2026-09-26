const BASE_URL = "http://localhost:5000/api/applications";

async function runTests() {
  console.log("=== BẮT ĐẦU TEST TOÀN DIỆN 6 FORM ỨNG TUYỂN ===");

  const tests = [
    // Validation tests
    {
      name: "1. Validation - Thiếu họ tên",
      data: { email: "test@gmail.com", phone: "0912345678" },
      expectedStatus: 400,
    },
    {
      name: "2. Validation - Thiếu email",
      data: { fullName: "Nguyen Van A", phone: "0912345678" },
      expectedStatus: 400,
    },
    {
      name: "3. Validation - Email sai định dạng",
      data: { fullName: "Nguyen Van A", email: "wrong-format-email", phone: "0912345678" },
      expectedStatus: 400,
    },
    {
      name: "4. Validation - Thiếu số điện thoại",
      data: { fullName: "Nguyen Van A", email: "test@gmail.com" },
      expectedStatus: 400,
    },
    {
      name: "5. Validation - Thiếu field bắt buộc của Nhân viên bán hàng",
      data: {
        jobId: "nhan-vien-ban-hang-pt",
        fullName: "Nguyen Van A",
        email: "test@gmail.com",
        phone: "0912345678",
      },
      expectedStatus: 400,
    },
    {
      name: "6. Validation - Thiếu field bắt buộc của Cửa hàng trưởng",
      data: {
        jobId: "cua-hang-truong",
        fullName: "Nguyen Van B",
        email: "test@gmail.com",
        phone: "0912345678",
      },
      expectedStatus: 400,
    },

    // 6 Valid Form Submissions
    {
      name: "7. [Form 1 - CuliForm] Nhân viên bán hàng Part-time",
      data: {
        jobId: "nhan-vien-ban-hang-pt",
        jobTitle: "Nhân viên Bán hàng (Bán thời gian / Part-time)",
        fullName: "Nguyễn Thị Mai",
        email: "nguyenthimai@gmail.com",
        phone: "0901234567",
        birthday: "2003-08-10",
        sex: "Nữ",
        idCard: "079303001234",
        hasOriginalId: "Đang giữ bản gốc",
        education: "Đại học",
        workingArea: "Quận 1, TP.HCM",
        shift: "Có",
        startDate: "2026-10-01",
      },
      expectedStatus: 200,
    },
    {
      name: "8. [Form 2 - StaffForm] Nhân viên bán hàng Full-time",
      data: {
        jobId: "nhan-vien-ban-hang-ft",
        jobTitle: "Nhân viên Bán hàng (Toàn thời gian / Full-time)",
        fullName: "Trần Văn Nam",
        email: "tranvannam@gmail.com",
        phone: "0912345678",
        birthday: "2001-04-20",
        sex: "Nam",
        idCard: "079201005678",
        hasOriginalId: "Đang giữ bản gốc",
        education: "Cao đẳng",
        workingArea: "Quận Bình Thạnh, TP.HCM",
        shift: "Có",
        startDate: "2026-10-05",
      },
      expectedStatus: 200,
    },
    {
      name: "9. [Form 3 - SMForm] Cửa Hàng Trưởng (Kèm CV)",
      data: {
        jobId: "cua-hang-truong",
        jobTitle: "Cửa Hàng Trưởng (Store Manager)",
        fullName: "Lê Hoàng Phúc",
        email: "lehoangphuc@gmail.com",
        phone: "0987654321",
        idCard: "079195009876",
        hasOriginalId: "Đang giữ bản gốc",
        education: "Đại học",
        workingArea: "Quận 7, TP.HCM",
        expectedSalary: "8.000.000 đến 9.000.000",
        startDate: "2026-10-10",
        cvFile: {
          name: "CV_LeHoangPhuc_StoreManager.pdf",
          type: "application/pdf",
          content: "JVBERi0xLjQKJcTl8uXr...", // Dummy base64
        },
      },
      expectedStatus: 200,
    },
    {
      name: "10. [Form 4 - LMForm] Legal Manager (Kèm CV)",
      data: {
        jobId: "legal-manager",
        jobTitle: "Legal Manager (Business Partnering)",
        fullName: "Phạm Minh Tâm",
        email: "phamminhtam.legal@gmail.com",
        phone: "0933445566",
        cvFile: {
          name: "CV_PhamMinhTam_LegalManager.pdf",
          type: "application/pdf",
          content: "JVBERi0xLjQKJcTl8uXr...",
        },
      },
      expectedStatus: 200,
    },
    {
      name: "11. [Form 5 - QAForm] QA Team Leader (Kèm CV)",
      data: {
        jobId: "qa-team-leader",
        jobTitle: "QA Team Leader",
        fullName: "Võ Thị Bích Trâm",
        email: "bichtram.qa@gmail.com",
        phone: "0977889900",
        cvFile: {
          name: "CV_VoThiBichTram_QA.pdf",
          type: "application/pdf",
          content: "JVBERi0xLjQKJcTl8uXr...",
        },
      },
      expectedStatus: 200,
    },
    {
      name: "12. [Form 6 - MS] Mystery Shopper (Kèm CV)",
      data: {
        jobId: "mystery-shopper",
        jobTitle: "Cộng tác viên Part-time – Mystery Shopper (Khách hàng bí mật)",
        fullName: "Đỗ Quốc Bảo",
        email: "doquocbao.ms@gmail.com",
        phone: "0966554433",
        cvFile: {
          name: "CV_DoQuocBao_Shopper.docx",
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          content: "UEsDBBQABgAIAAAAIQ...",
        },
      },
      expectedStatus: 200,
    },
  ];

  let successCount = 0;
  for (const t of tests) {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t.data),
      });

      const json = await res.json();
      const passed = res.status === t.expectedStatus;
      if (passed) successCount++;
      console.log(
        `${passed ? "✅ PASS" : "❌ FAIL"} [${t.name}] - Status: ${res.status} (Kỳ vọng: ${t.expectedStatus})`
      );
      if (!passed || t.expectedStatus !== 200) {
        console.log("   Phản hồi:", json.message);
      }
    } catch (err) {
      console.error(`❌ ERROR [${t.name}]:`, err.message);
    }
  }

  console.log(`\n=== TỔNG KẾT: ${successCount}/${tests.length} TESTS ĐÃ VƯỢT QUA ===`);
}

runTests();
