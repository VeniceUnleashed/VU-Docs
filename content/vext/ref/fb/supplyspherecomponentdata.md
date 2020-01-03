---
title: SupplySphereComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SupplySphereComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SupplySphereComponentData(SupplySphereComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SupplySphereComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SupplySphereComponentData](SupplySphereComponentData).                      |
| SupplySphereComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SupplySphereComponentData](SupplySphereComponentData).                    |
| SupplySphereComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SupplySphereComponentData](SupplySphereComponentData).              |
| SupplySphereComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupplySphereComponentData](SupplySphereComponentData). |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| supplyData | [SupplyData](SupplyData) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SupplySphereComponentData](SupplySphereComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupplySphereComponentData](SupplySphereComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
