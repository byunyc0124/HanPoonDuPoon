package com.stn.hpdp.model.repository;

import com.stn.hpdp.model.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FundingRepository extends JpaRepository<Funding, Long> {
    List<Funding> findAllByCompany_Id(Long companyId);

    @Query("select f from Funding f where f.state != 3")
    List<Funding> getAllFundings();
}