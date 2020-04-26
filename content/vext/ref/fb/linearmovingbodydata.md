---
title: LinearMovingBodyData
---

Inherits from 
[MovingBodyData](/vext/ref/fb/movingbodydata)

## Summary
### Constructors
| |
| ----------- |
| **[LinearMovingBodyData](#constructor-0)**() |
| **[LinearMovingBodyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LinearMovingBodyData](#constructor-2)**(other: [MovingBodyData](/vext/ref/fb/movingbodydata)) |
| **[LinearMovingBodyData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "axis" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "start" >}} | [EndPointData](/vext/ref/fb/endpointdata) |
| {{< prop "endValue" >}} | [EndPointData](/vext/ref/fb/endpointdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LinearMovingBodyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LinearMovingBodyData {#constructor-0}
> **LinearMovingBodyData**()

Creates a new [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata) frostbite instance.

### LinearMovingBodyData {#constructor-1}
> **LinearMovingBodyData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LinearMovingBodyData {#constructor-2}
> **LinearMovingBodyData**(other: [MovingBodyData](/vext/ref/fb/movingbodydata))

Casts an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata) to [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovingBodyData](/vext/ref/fb/movingbodydata) | The instance to cast to [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata). |

### LinearMovingBodyData {#constructor-3}
> **LinearMovingBodyData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata). |

## Properties
### {{% prop-heading "axis" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "start" %}}
> **[EndPointData](/vext/ref/fb/endpointdata)**

### {{% prop-heading "endValue" %}}
> **[EndPointData](/vext/ref/fb/endpointdata)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata) type.

