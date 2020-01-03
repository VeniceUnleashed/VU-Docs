---
title: FollowConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FollowConstantData()                                                          | Create a new instance of this container type.                                                                               |
| FollowConstantData(FollowConstantData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FollowConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [FollowConstantData](/vext/ref/fb/followconstantdata/).                                      |
| FollowConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowConstantData](/vext/ref/fb/followconstantdata/). |

## Properties

| Name                             | Type   | Description |
| -------------------------------- | ------ | ----------- |
| distanceFromPlayerBeforeTeleport | number |             |
| followHumanMaxDistance           | number |             |
| followHumanInCombatMaxDistance   | number |             |
| followAiMaxDistance              | number |             |
| followAiInCombatMaxDistance      | number |             |
| followMimicPoseDistance          | number |             |
| followInertia                    | number |             |
| lookAwayAngle                    | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [FollowConstantData](/vext/ref/fb/followconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowConstantData](/vext/ref/fb/followconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
