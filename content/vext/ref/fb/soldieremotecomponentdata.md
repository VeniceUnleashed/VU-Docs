---
title: SoldierEmoteComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierEmoteComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierEmoteComponentData(SoldierEmoteComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierEmoteComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierEmoteComponentData](SoldierEmoteComponentData).                      |
| SoldierEmoteComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierEmoteComponentData](SoldierEmoteComponentData).                    |
| SoldierEmoteComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierEmoteComponentData](SoldierEmoteComponentData).              |
| SoldierEmoteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEmoteComponentData](SoldierEmoteComponentData). |

## Properties

| Name                     | Type                                                                           | Description |
| ------------------------ | ------------------------------------------------------------------------------ | ----------- |
| binding                  | [SoldierEmoteBinding](SoldierEmoteBinding)                                     |             |
| networkedMessageMappings | [SoldierEmoteNetworkedMessageMapping](SoldierEmoteNetworkedMessageMapping)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierEmoteComponentData](SoldierEmoteComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierEmoteComponentData](SoldierEmoteComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
