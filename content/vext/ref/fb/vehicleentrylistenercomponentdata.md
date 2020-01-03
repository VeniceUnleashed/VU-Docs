---
title: VehicleEntryListenerComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleEntryListenerComponentData()                                                          | Create a new instance of this container type.                                                                                                             |
| VehicleEntryListenerComponentData(VehicleEntryListenerComponentData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| VehicleEntryListenerComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [VehicleEntryListenerComponentData](/vext/ref/fb/vehicleentrylistenercomponentdata/).                      |
| VehicleEntryListenerComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleEntryListenerComponentData](/vext/ref/fb/vehicleentrylistenercomponentdata/).                    |
| VehicleEntryListenerComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleEntryListenerComponentData](/vext/ref/fb/vehicleentrylistenercomponentdata/).              |
| VehicleEntryListenerComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleEntryListenerComponentData](/vext/ref/fb/vehicleentrylistenercomponentdata/). |

## Properties

| Name                         | Type                                                       | Description |
| ---------------------------- | ---------------------------------------------------------- | ----------- |
| vehicleEntryListener         | [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding/) |             |
| vehicleCameraControl         | [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding/) |             |
| animationEntitySpacePriority | number                                                     |             |
| animationWheelTransformDelay | number                                                     |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleEntryListenerComponentData](/vext/ref/fb/vehicleentrylistenercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleEntryListenerComponentData](/vext/ref/fb/vehicleentrylistenercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
