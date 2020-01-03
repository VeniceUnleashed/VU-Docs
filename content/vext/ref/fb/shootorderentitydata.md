---
title: ShootOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ShootOrderEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| ShootOrderEntityData(ShootOrderEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ShootOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/).              |
| ShootOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/).                  |
| ShootOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/).                            |
| ShootOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/).                    |
| ShootOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/).              |
| ShootOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/). |

## Properties

| Name                      | Type                         | Description |
| ------------------------- | ---------------------------- | ----------- |
| strengthType              | [StrengthType](/vext/ref/fb/strengthtype/) |             |
| pose                      | [PoseType](/vext/ref/fb/posetype/)         |             |
| shootType                 | [ShootType](/vext/ref/fb/shoottype/)       |             |
| preferAlternativeWeapon   | bool                         |             |
| completeWhenHumanIsSensed | bool                         |             |
| cycleTargets              | bool                         |             |
| randomTargetOrder         | bool                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
