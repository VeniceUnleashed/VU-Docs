---
title: VehicleParachuteData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VehicleParachuteData()                                                          | Create a new instance of this container type.                                                                                   |
| VehicleParachuteData(VehicleParachuteData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VehicleParachuteData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata/). |

## Properties

| Name                                    | Type   | Description |
| --------------------------------------- | ------ | ----------- |
| terminalVelocity                        | number |             |
| freefallGravityMultiplier               | number |             |
| dragCoefficient                         | number |             |
| maxRollVelocity                         | number |             |
| maxPitchVelocity                        | number |             |
| maxYawVelocity                          | number |             |
| deployTime                              | number |             |
| undeployGroundHeight                    | number |             |
| angularDescentDamping                   | number |             |
| angularDeployDamping                    | number |             |
| deployPhysicsStart                      | number |             |
| deployInitialDragStart                  | number |             |
| initialDragStartVelocityScale           | number |             |
| initialDragAngularVelocityPitch         | number |             |
| initialDragRandomAngularVelocityRollMax | number |             |
| rampLength                              | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
