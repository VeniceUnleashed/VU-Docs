---
title: VehicleParachuteData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleParachuteData](#constructor-0)**() |
| **[VehicleParachuteData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleParachuteData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "terminalVelocity" >}} | float |
| {{< prop "freefallGravityMultiplier" >}} | float |
| {{< prop "dragCoefficient" >}} | float |
| {{< prop "maxRollVelocity" >}} | float |
| {{< prop "maxPitchVelocity" >}} | float |
| {{< prop "maxYawVelocity" >}} | float |
| {{< prop "deployTime" >}} | float |
| {{< prop "undeployGroundHeight" >}} | float |
| {{< prop "angularDescentDamping" >}} | float |
| {{< prop "angularDeployDamping" >}} | float |
| {{< prop "deployPhysicsStart" >}} | float |
| {{< prop "deployInitialDragStart" >}} | float |
| {{< prop "initialDragStartVelocityScale" >}} | float |
| {{< prop "initialDragAngularVelocityPitch" >}} | float |
| {{< prop "initialDragRandomAngularVelocityRollMax" >}} | float |
| {{< prop "rampLength" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleParachuteData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleParachuteData {#constructor-0}
> **VehicleParachuteData**()

Creates a new [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata) frostbite instance.

### VehicleParachuteData {#constructor-1}
> **VehicleParachuteData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleParachuteData {#constructor-2}
> **VehicleParachuteData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata). |

## Properties
### {{% prop-heading "terminalVelocity" %}}
> **float**

### {{% prop-heading "freefallGravityMultiplier" %}}
> **float**

### {{% prop-heading "dragCoefficient" %}}
> **float**

### {{% prop-heading "maxRollVelocity" %}}
> **float**

### {{% prop-heading "maxPitchVelocity" %}}
> **float**

### {{% prop-heading "maxYawVelocity" %}}
> **float**

### {{% prop-heading "deployTime" %}}
> **float**

### {{% prop-heading "undeployGroundHeight" %}}
> **float**

### {{% prop-heading "angularDescentDamping" %}}
> **float**

### {{% prop-heading "angularDeployDamping" %}}
> **float**

### {{% prop-heading "deployPhysicsStart" %}}
> **float**

### {{% prop-heading "deployInitialDragStart" %}}
> **float**

### {{% prop-heading "initialDragStartVelocityScale" %}}
> **float**

### {{% prop-heading "initialDragAngularVelocityPitch" %}}
> **float**

### {{% prop-heading "initialDragRandomAngularVelocityRollMax" %}}
> **float**

### {{% prop-heading "rampLength" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata) type.

