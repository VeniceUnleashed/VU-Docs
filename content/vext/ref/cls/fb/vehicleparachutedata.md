---
title: VehicleParachuteData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| VehicleParachuteData()                                                          | Create a new instance of this container type.                                                                                   |
| VehicleParachuteData(VehicleParachuteData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| VehicleParachuteData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleParachuteData](VehicleParachuteData). |

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
| [VehicleParachuteData](VehicleParachuteData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleParachuteData](VehicleParachuteData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
