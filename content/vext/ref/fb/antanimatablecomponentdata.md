---
title: AntAnimatableComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AntAnimatableComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| AntAnimatableComponentData(AntAnimatableComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| AntAnimatableComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/).                      |
| AntAnimatableComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/).                    |
| AntAnimatableComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/).              |
| AntAnimatableComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/). |

## Properties

| Name                         | Type                                               | Description |
| ---------------------------- | -------------------------------------------------- | ----------- |
| realm                        | [Realm](/vext/ref/fb/realm/)                                     |             |
| subRealm                     | [SubRealm](/vext/ref/fb/subrealm/)                               |             |
| animationData                | [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata/) |             |
| mesh                         | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/)               |             |
| autoActivate                 | bool                                               |             |
| animationControlledFromStart | bool                                               |             |
| forceDisableCulling          | bool                                               |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
