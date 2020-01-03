---
title: VehicleEntryListenerBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                    | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| VehicleEntryListenerBinding()                                  | Create a new instance of this structure type.            |
| VehicleEntryListenerBinding(VehicleEntryListenerBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type             | Description |
| ------------------------ | ---------------- | ----------- |
| inVehicle                | [AntRef](/vext/ref/fb/antref/) |             |
| inOpenEntry              | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryFire         | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryYaw          | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryPitch        | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryRoll         | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryRotation     | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryForceX       | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryForceY       | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryForceZ       | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryIndex        | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryIndexUpdated | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleOpenEntryIndex    | [AntRef](/vext/ref/fb/antref/) |             |
| inVehicleRetrigger       | [AntRef](/vext/ref/fb/antref/) |             |
| vehicleEntryChooserIndex | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding/) | [Clone](#clone) |            |

### Clone

> [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
