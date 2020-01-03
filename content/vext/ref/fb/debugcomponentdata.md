---
title: DebugComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| DebugComponentData()                                                          | Create a new instance of this container type.                                                                               |
| DebugComponentData(DebugComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| DebugComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DebugComponentData](DebugComponentData).                      |
| DebugComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DebugComponentData](DebugComponentData).                    |
| DebugComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DebugComponentData](DebugComponentData).              |
| DebugComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugComponentData](DebugComponentData). |

## Properties

| Name         | Type                         | Description |
| ------------ | ---------------------------- | ----------- |
| realm        | [Realm](Realm)               |             |
| debugTexture | [TextureAsset](TextureAsset) |             |
| fullscreen   | bool                         |             |
| enable       | bool                         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugComponentData](DebugComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugComponentData](DebugComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
