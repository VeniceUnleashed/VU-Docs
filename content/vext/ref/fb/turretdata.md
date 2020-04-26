---
title: TurretData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TurretData](#constructor-0)**() |
| **[TurretData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TurretData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "pitchP" >}} | float |
| {{< prop "yawP" >}} | float |
| {{< prop "fakeShootSpaceMinDistance" >}} | float |
| {{< prop "fakeShootSpaceMaxDistance" >}} | float |
| {{< prop "aimingConstraints" >}} | [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TurretData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TurretData {#constructor-0}
> **TurretData**()

Creates a new [TurretData](/vext/ref/fb/turretdata) frostbite instance.

### TurretData {#constructor-1}
> **TurretData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TurretData](/vext/ref/fb/turretdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TurretData {#constructor-2}
> **TurretData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TurretData](/vext/ref/fb/turretdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TurretData](/vext/ref/fb/turretdata). |

## Properties
### {{% prop-heading "pitchP" %}}
> **float**

### {{% prop-heading "yawP" %}}
> **float**

### {{% prop-heading "fakeShootSpaceMinDistance" %}}
> **float**

### {{% prop-heading "fakeShootSpaceMaxDistance" %}}
> **float**

### {{% prop-heading "aimingConstraints" %}}
> **[AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TurretData](/vext/ref/fb/turretdata) type.

