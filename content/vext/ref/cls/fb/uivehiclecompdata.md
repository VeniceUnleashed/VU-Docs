---
title: UIVehicleCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIVehicleCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIVehicleCompData(UIVehicleCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIVehicleCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIVehicleCompData](UIVehicleCompData).                  |
| UIVehicleCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIVehicleCompData](UIVehicleCompData).                                      |
| UIVehicleCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIVehicleCompData](UIVehicleCompData). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| rangeMeterUpdatesPerSecond | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIVehicleCompData](UIVehicleCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIVehicleCompData](UIVehicleCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
