---
title: HealthStateData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| HealthStateData()                                                          | Create a new instance of this container type.                                                                         |
| HealthStateData(HealthStateData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| HealthStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HealthStateData](/vext/ref/fb/healthstatedata/). |

## Properties

| Name                       | Type                                                                   | Description |
| -------------------------- | ---------------------------------------------------------------------- | ----------- |
| objects                    | [GameObjectData](/vext/ref/fb/gameobjectdata/)\[\]                                   |             |
| loosePartPhysics           | [NetworkableLoosePartPhysicsData](/vext/ref/fb/networkableloosepartphysicsdata/)\[\] |             |
| spawnedBangerBlueprint     | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)                                     |             |
| spawnedBangerImpulseParams | [BangerSpawnImpulseParams](/vext/ref/fb/bangerspawnimpulseparams/)                   |             |
| health                     | number                                                                 |             |
| partIndex                  | number                                                                 |             |
| physicsEnabled             | bool                                                                   |             |
| copyDamageToBanger         | bool                                                                   |             |
| canSupportOtherParts       | bool                                                                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [HealthStateData](/vext/ref/fb/healthstatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HealthStateData](/vext/ref/fb/healthstatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
