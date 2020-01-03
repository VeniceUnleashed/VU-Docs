---
title: DestructionPartComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionPartComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| DestructionPartComponentData(DestructionPartComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DestructionPartComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/).                      |
| DestructionPartComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/).                    |
| DestructionPartComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/).              |
| DestructionPartComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/). |

## Properties

| Name             | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| objects          | [GameObjectData](/vext/ref/fb/gameobjectdata/)\[\]                       |             |
| partIndex        | number                                                     |             |
| connectivityType | [DestructionConnectivityType](/vext/ref/fb/destructionconnectivitytype/) |             |
| fixed            | bool                                                       |             |
| fragile          | bool                                                       |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
