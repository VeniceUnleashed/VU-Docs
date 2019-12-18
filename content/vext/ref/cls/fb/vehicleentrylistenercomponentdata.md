---
title: VehicleEntryListenerComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleEntryListenerComponentData()                                                          | Create a new instance of this container type.                                                                                                             |
| VehicleEntryListenerComponentData(VehicleEntryListenerComponentData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| VehicleEntryListenerComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [VehicleEntryListenerComponentData](VehicleEntryListenerComponentData).                      |
| VehicleEntryListenerComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleEntryListenerComponentData](VehicleEntryListenerComponentData).                    |
| VehicleEntryListenerComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleEntryListenerComponentData](VehicleEntryListenerComponentData).              |
| VehicleEntryListenerComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleEntryListenerComponentData](VehicleEntryListenerComponentData). |

## Properties

| Name                         | Type                                                       | Description |
| ---------------------------- | ---------------------------------------------------------- | ----------- |
| vehicleEntryListener         | [VehicleEntryListenerBinding](VehicleEntryListenerBinding) |             |
| vehicleCameraControl         | [VehicleCameraControlBinding](VehicleCameraControlBinding) |             |
| animationEntitySpacePriority | number                                                     |             |
| animationWheelTransformDelay | number                                                     |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleEntryListenerComponentData](VehicleEntryListenerComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleEntryListenerComponentData](VehicleEntryListenerComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
