package Hello.core.Member;

import java.util.HashMap;
import java.util.Map;

public class MemoryMemberRepository implements MemberRepository {

    private static Map<Long, Member> store = new HashMap<>(); //저장소니까 맵같은게있어야돼


    @Override
    public void save(Member member) {
        store.put(member.getId(), member);
    }

    @Override
    public Member findByid(Long memberId) {
        return  store.get(memberId);
    }
}
