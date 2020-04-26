---
title: MovingBodyData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MovingBodyData](#constructor-0)**() |
| **[MovingBodyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MovingBodyData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "mass" >}} | float |
| {{< prop "inertia" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MovingBodyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MovingBodyData {#constructor-0}
> **MovingBodyData**()

Creates a new [MovingBodyData](/vext/ref/fb/movingbodydata) frostbite instance.

### MovingBodyData {#constructor-1}
> **MovingBodyData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MovingBodyData](/vext/ref/fb/movingbodydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MovingBodyData {#constructor-2}
> **MovingBodyData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovingBodyData](/vext/ref/fb/movingbodydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MovingBodyData](/vext/ref/fb/movingbodydata). |

## Properties
### {{% prop-heading "mass" %}}
> **float**

### {{% prop-heading "inertia" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MovingBodyData](/vext/ref/fb/movingbodydata) type.

