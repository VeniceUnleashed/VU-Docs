---
title: ShootAtFromCoverData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ShootAtFromCoverData()                                                          | Create a new instance of this container type.                                                                                   |
| ShootAtFromCoverData(ShootAtFromCoverData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ShootAtFromCoverData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ShootAtFromCoverData](/vext/ref/fb/shootatfromcoverdata/).                            |
| ShootAtFromCoverData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ShootAtFromCoverData](/vext/ref/fb/shootatfromcoverdata/).                    |
| ShootAtFromCoverData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ShootAtFromCoverData](/vext/ref/fb/shootatfromcoverdata/).              |
| ShootAtFromCoverData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShootAtFromCoverData](/vext/ref/fb/shootatfromcoverdata/). |

## Properties

| Name                    | Type                         | Description |
| ----------------------- | ---------------------------- | ----------- |
| strengthType            | [StrengthType](/vext/ref/fb/strengthtype/) |             |
| shootType               | [ShootType](/vext/ref/fb/shoottype/)       |             |
| cycleTargets            | bool                         |             |
| randomTargetOrder       | bool                         |             |
| preferAlternativeWeapon | bool                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShootAtFromCoverData](/vext/ref/fb/shootatfromcoverdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShootAtFromCoverData](/vext/ref/fb/shootatfromcoverdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
