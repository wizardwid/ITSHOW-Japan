import 'package:flutter/material.dart';

class HomeCategoryWidget extends StatelessWidget {
  final int id;
  final String name;

  const HomeCategoryWidget({
    super.key,
    required this.id,
    required this.name,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: 260,
        height: 160,
        child: Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withAlpha(20),
                blurRadius: 10,
                offset: Offset(0, 0),
              ),
            ],
          ),
          padding: EdgeInsets.fromLTRB(16, 0, 0, 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                width: 16,
                height: 25,
              ),
              Text(
                name,
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
              ),
              Row(
                children: [
                  Text(
                    "80%",
                    style: TextStyle(
                      color: Color(0xffFD6929),
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  SizedBox(
                    width: 5,
                  ),
                  Container(
                    child: Text(
                      "학습완료",
                      style: TextStyle(
                        color: Color(0xff9E9E9E),
                        fontSize: 12,
                      ),
                    ),
                  ),
                  SizedBox(
                    width: 110,
                  ),
                  Text(
                    "총 245개",
                    style: TextStyle(
                      fontSize: 10,
                      color: Color(0xff919191),
                    ),
                  ),
                ],
              ),
              SizedBox(
                width: 17,
              ),
              Flexible(
                child: Container(
                  margin: EdgeInsets.fromLTRB(0, 10, 0, 0),
                  width: 230,
                  height: 50,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8),
                    color: Color(0xffffe7dd),
                  ),
                  child: Row(
                    children: [
                      SizedBox(
                        width: 16,
                      ),
                      Text(
                        '이거 345개 주세요',
                        style: TextStyle(
                          fontSize: 14,
                        ),
                      ),
                      SizedBox(
                        width: 64,
                      ),
                      Icon(Icons.keyboard_arrow_right_rounded),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
