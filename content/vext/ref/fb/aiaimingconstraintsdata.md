---
title: AIAimingConstraintsData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AIAimingConstraintsData](#constructor-0)**() |
| **[AIAimingConstraintsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AIAimingConstraintsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minYaw" >}} | float |
| {{< prop "maxYaw" >}} | float |
| {{< prop "minPitch" >}} | float |
| {{< prop "maxPitch" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AIAimingConstraintsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AIAimingConstraintsData {#constructor-0}
> **AIAimingConstraintsData**()

Creates a new [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) frostbite instance.

### AIAimingConstraintsData {#constructor-1}
> **AIAimingConstraintsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AIAimingConstraintsData {#constructor-2}
> **AIAimingConstraintsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata). |

## Properties
### {{% prop-heading "minYaw" %}}
> **float**

### {{% prop-heading "maxYaw" %}}
> **float**

### {{% prop-heading "minPitch" %}}
> **float**

### {{% prop-heading "maxPitch" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) type.

