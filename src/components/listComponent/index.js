import { FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { EventCardLarge, EventCardMedium, EventCardSmall, EventDetailsImagesComponent, PostDetails, TabCard } from "../commonComponents"
import { width, height, totalSize } from 'react-native-dimension';
import { ComponentWrapper, Wrapper } from "../wrappers";
import { Spacer } from "../spacers";
import { AccordionData, EventDetailsImagesData, InvitationScopeData, InviteFriendsData, MedicineData, PostCommentData, PostData, interestsData } from "../../utilities/dummyData";
import { MediumTitle } from "../text";
import { InviteFriendsComponent } from "../../screens/App/inviteFriends/component";
import { PostCommentDetails } from "../../screens/App/eventComment/components";
import { InterestComponent } from "../../screens/Auth/Interests/components";
import { useState } from "react";
import { AddFriendsComponent } from "../../screens/Auth/addFriends/component";
import { colors, fontFamily } from "../../constants";
import { InvitationScope } from "../../screens/App/aboutEvent/components";
import { Accordians } from "../../screens/App/Faq/components";
import { MedecineComponent } from "../../screens/App/home/components";

export const TabsList = ({ data, activeTab, onTabChange, tabStyle, inActiveBGColors, borderWidth }) => {
    return (
        <Wrapper>
            <FlatList
                data={data}
                horizontal
                ListHeaderComponent={() => <Wrapper style={{ width: width(4) }} />}
                ListFooterComponent={() => <Wrapper style={{ width: width(3) }} />}
                renderItem={({ item, index }) => {
                    return (
                        <TabCard
                            id={item?.id}
                            title={item.title}
                            isActive={item.title == 'All' ? true : false}
                            activeTab={activeTab}
                            onTabChange={onTabChange}
                            tabStyle={tabStyle}
                            inActiveBGColors={inActiveBGColors}
                            borderWidth={borderWidth}
                        />
                    )
                }}
            />
        </Wrapper>
    )
}

export const CurrentEventsList = ({ data, onEventSaved, OnpressEventDetails }) => {
    return (
        <FlatList
            data={data}
            horizontal
            ListHeaderComponent={() => <Wrapper style={{ width: width(4) }} />}
            ListFooterComponent={() => <Wrapper style={{ width: width(3) }} />}
            renderItem={({ item, index }) => {
                return (
                    <EventCardMedium
                        id={item?.id}
                        index={index}
                        image={item?.image}
                        name={item?.name}
                        date={item?.date}
                        location={item?.location}
                        live={item?.live}
                        saved={item?.saved}
                        onSaved={onEventSaved}
                        OnpressEventDetails={OnpressEventDetails}
                    />
                )
            }}
        />
    )
}

export const UpcomingEventsList = ({ data, onEventSaved, scrollEnabled, onPressCard }) => {
    return (
        <FlatList
            data={data}
            numColumns={2}
            scrollEnabled={scrollEnabled == false ? false : true}
            contentContainerStyle={{ alignSelf: 'center' }}
            renderItem={({ item, index }) => {
                return (
                    <EventCardSmall
                        id={item?.id}
                        index={index}
                        image={item?.image}
                        name={item?.name}
                        date={item?.date}
                        location={item?.location}
                        saved={item?.saved}
                        onSaved={onEventSaved}
                        onPressCard={onPressCard}
                    />
                )
            }}
        />
    )
}

// events list 
export const EventsList = ({ data, onEventSaved, footerHeight }) => {
    return (
        <FlatList
            data={data}
            contentContainerStyle={{ alignSelf: 'center' }}
            ListFooterComponent={() => <Spacer height={footerHeight ? footerHeight : height(3)} />}
            renderItem={({ item, index }) => {
                return (
                    <EventCardLarge
                        id={item?.id}
                        index={index}
                        image={item?.image}
                        name={item?.name}
                        date={item?.date}
                        location={item?.location}
                        userName={item?.userName}
                        startTime={item?.startTime}
                        endTime={item?.endTime}
                        category={item?.category}
                        live={item?.live}
                        saved={item?.saved}
                        onSaved={onEventSaved}
                    />
                )
            }}
        />
    )
}
export const InvitationScopeList = ({ selectedDistance, handleButtonPress }) => {

    return (
        <ComponentWrapper>
            <MediumTitle style={styles.heading}>Scope Of The Invitation</MediumTitle>
            <Spacer />
            <FlatList
                data={InvitationScopeData}
                horizontal
                ListFooterComponent={() => <Spacer />}
                renderItem={({ item, index }) => {
                    return (
                        <InvitationScope
                            km={item?.km}
                            onPress={() => handleButtonPress(index)}
                            selected={selectedDistance === index}
                            isColor={selectedDistance === index}
                        />
                    )
                }}
            />
        </ComponentWrapper>
    )
}
export const EventDetailsImagesList = () => {

    return (
        <FlatList
            data={EventDetailsImagesData}
            horizontal
            ListFooterComponent={() => <Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <EventDetailsImagesComponent
                        EventDetailsImages={item?.EventDetailsImages}
                    />
                )
            }}
        />

    )
}

export const PostList = ({ onPresspost }) => {

    return (

        <FlatList
            data={PostData}
            ListFooterComponent={() => <Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <PostDetails
                        profileImages={item?.profileImages}
                        postImages={item?.postImages}
                        welfareCommunity={item?.welfareCommunity}
                        description={item?.description}
                        likeCount={item?.likeCount}
                        commentCount={item?.commentCount}
                        usageTime={item?.usageTime}
                        onPresspost={onPresspost}
                    />
                )
            }}
        />


    )
}
export const PostCommentList = ({ onPresspost }) => {

    return (
        <Wrapper>
            <MediumTitle style={{ fontSize: totalSize(1.7), paddingLeft: width(4.5) }}>Community:</MediumTitle>
            <Spacer />
            <FlatList
                data={PostCommentData}
                ListFooterComponent={() => <Spacer />}
                renderItem={({ item, index }) => {
                    return (
                        <PostCommentDetails
                            profileImages={item?.profileImages}
                            postImages={item?.postImages}
                            welfareCommunity={item?.welfareCommunity}
                            description={item?.description}
                            likeCount={item?.likeCount}
                            commentCount={item?.commentCount}
                            usageTime={item?.usageTime}
                            onPresspost={onPresspost}
                            index={index}
                        />
                    )
                }}
            />
        </Wrapper>

    )
}

export const InviteFriendsList = () => {
    return (
        <FlatList
            data={InviteFriendsData}
            ListFooterComponent={<Spacer />}
            ItemSeparatorComponent={<Spacer isSmall />}
            renderItem={({ item, index }) => {
                return (
                    <InviteFriendsComponent
                        name={item?.name}
                        inviteImages={item?.inviteImages}
                    />
                )
            }}
        />
    )
}

export const MedecineList = () => {
    return (
        <FlatList
            data={MedicineData}
            ListFooterComponent={<Spacer />}
            ItemSeparatorComponent={<Spacer isSmall />}
            renderItem={({ item, index }) => {
                return (
                    <MedecineComponent
                        medicineName={item?.medicineName}
                        icon={item?.icon}
                        usageTime={item?.usageTime}
                    />
                )
            }}
        />
    )
}

export const InterestList = ({ isSelected, selectedInterests, toggleInterest }) => {


    return (
        <FlatList
            numColumns={3}
            data={interestsData}
            columnWrapperStyle={{
                marginHorizontal: width(4),
                marginVertical: height(1),
            }}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    onPress={() => toggleInterest(index)}
                    activeOpacity={0.8}
                >
                    <InterestComponent
                        image={item?.image}
                        title={item?.title}
                        isSelected={selectedInterests.includes(index)}
                    />
                </TouchableOpacity>
            )}
        />
    );
};


export const AccordionList = ({
    isOpenAccordion,
    setIsOpenAccordion,
    toggleAccordion,
}) => {
    return (
        <FlatList
            data={AccordionData}
            ListFooterComponent={<Spacer />}
            ItemSeparatorComponent={<Spacer isSmall />}
            renderItem={({ item, index }) => {
                return (
                    <Accordians
                        collapseHeader={item?.collapseHeader}
                        description={item?.description}
                        isOpenAccordion={isOpenAccordion[index]}
                        setIsOpenAccordion={(isOpen) => {
                            const newIsOpenAccordion = [...isOpenAccordion];
                            newIsOpenAccordion[index] = isOpen;
                            setIsOpenAccordion(newIsOpenAccordion);
                        }}
                        toggleAccordion={() => toggleAccordion(index)}
                        index={index}
                    />
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: totalSize(1.6),
        lineHeight: totalSize(2.4),
        color: colors.appTextColor12
    },

})
