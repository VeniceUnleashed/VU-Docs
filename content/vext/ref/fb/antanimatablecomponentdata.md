---
title: AntAnimatableComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AntAnimatableComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| AntAnimatableComponentData(AntAnimatableComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| AntAnimatableComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [AntAnimatableComponentData](AntAnimatableComponentData).                      |
| AntAnimatableComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AntAnimatableComponentData](AntAnimatableComponentData).                    |
| AntAnimatableComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AntAnimatableComponentData](AntAnimatableComponentData).              |
| AntAnimatableComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntAnimatableComponentData](AntAnimatableComponentData). |

## Properties

| Name                         | Type                                               | Description |
| ---------------------------- | -------------------------------------------------- | ----------- |
| realm                        | [Realm](Realm)                                     |             |
| subRealm                     | [SubRealm](SubRealm)                               |             |
| animationData                | [AntAnimationHandlerData](AntAnimationHandlerData) |             |
| mesh                         | [SkinnedMeshAsset](SkinnedMeshAsset)               |             |
| autoActivate                 | bool                                               |             |
| animationControlledFromStart | bool                                               |             |
| forceDisableCulling          | bool                                               |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AntAnimatableComponentData](AntAnimatableComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntAnimatableComponentData](AntAnimatableComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
