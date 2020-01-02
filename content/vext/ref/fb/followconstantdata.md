---
title: FollowConstantData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FollowConstantData()                                                          | Create a new instance of this container type.                                                                               |
| FollowConstantData(FollowConstantData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FollowConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [FollowConstantData](FollowConstantData).                                      |
| FollowConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowConstantData](FollowConstantData). |

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
| [FollowConstantData](FollowConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FollowConstantData](FollowConstantData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
