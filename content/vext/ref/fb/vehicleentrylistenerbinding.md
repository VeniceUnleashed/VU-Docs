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
| inVehicle                | [AntRef](AntRef) |             |
| inOpenEntry              | [AntRef](AntRef) |             |
| vehicleEntryFire         | [AntRef](AntRef) |             |
| vehicleEntryYaw          | [AntRef](AntRef) |             |
| vehicleEntryPitch        | [AntRef](AntRef) |             |
| vehicleEntryRoll         | [AntRef](AntRef) |             |
| vehicleEntryRotation     | [AntRef](AntRef) |             |
| vehicleEntryForceX       | [AntRef](AntRef) |             |
| vehicleEntryForceY       | [AntRef](AntRef) |             |
| vehicleEntryForceZ       | [AntRef](AntRef) |             |
| vehicleEntryIndex        | [AntRef](AntRef) |             |
| vehicleEntryIndexUpdated | [AntRef](AntRef) |             |
| vehicleOpenEntryIndex    | [AntRef](AntRef) |             |
| inVehicleRetrigger       | [AntRef](AntRef) |             |
| vehicleEntryChooserIndex | [AntRef](AntRef) |             |

## Methods

| Type                                                       | Name            | Parameters |
| ---------------------------------------------------------- | --------------- | ---------- |
| [VehicleEntryListenerBinding](VehicleEntryListenerBinding) | [Clone](#clone) |            |

### Clone

> [VehicleEntryListenerBinding](VehicleEntryListenerBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
