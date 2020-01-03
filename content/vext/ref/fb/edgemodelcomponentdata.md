---
title: EdgeModelComponentData
---
### Base Classes

[DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                          | Description                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EdgeModelComponentData()                                                                             | Create a new instance of this container type.                                                                                                          |
| EdgeModelComponentData(EdgeModelComponentData other)                                                 | Create a reference copy of an instance of the same type.                                                                                               |
| EdgeModelComponentData([DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata/) other) | Upcast an instance of type [DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata/) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/). |
| EdgeModelComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                                         | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/).                                         |
| EdgeModelComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                                       | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/).                                       |
| EdgeModelComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                                 | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/).                                 |
| EdgeModelComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)                    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/).                    |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| rigidMeshes      | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset/)\[\] |             |
| maxInstanceCount | number                               |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
