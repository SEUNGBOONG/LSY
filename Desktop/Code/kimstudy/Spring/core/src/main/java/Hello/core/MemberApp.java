package Hello.core;

import Hello.core.Member.Grade;
import Hello.core.Member.Member;
import Hello.core.Member.MemberService;
import Hello.core.Member.MemberServiceimpl;

public class MemberApp {
    public static void main(String[] args) {
        MemberService memberService =new MemberServiceimpl();
        Member member =new Member(1L,"MemberA", Grade.VIP);
        memberService.join(member);

        Member findMember =memberService.findMember(1L);
        System.out.println("new member = " + member.getName());
        System.out.println("find Member = " + findMember.getName());
    }
}
