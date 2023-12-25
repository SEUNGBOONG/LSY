package Hello.core.Member;

public interface MemberRepository {

    void save(Member member);

    Member findByid(Long memberId);
}
