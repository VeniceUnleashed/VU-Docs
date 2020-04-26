---
title: CameraRecoilData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CameraRecoilData](#constructor-0)**() |
| **[CameraRecoilData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CameraRecoilData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "springConstant" >}} | float |
| {{< prop "springDamping" >}} | float |
| {{< prop "springMinThresholdAngle" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CameraRecoilData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CameraRecoilData {#constructor-0}
> **CameraRecoilData**()

Creates a new [CameraRecoilData](/vext/ref/fb/camerarecoildata) frostbite instance.

### CameraRecoilData {#constructor-1}
> **CameraRecoilData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CameraRecoilData](/vext/ref/fb/camerarecoildata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CameraRecoilData {#constructor-2}
> **CameraRecoilData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraRecoilData](/vext/ref/fb/camerarecoildata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CameraRecoilData](/vext/ref/fb/camerarecoildata). |

## Properties
### {{% prop-heading "springConstant" %}}
> **float**

### {{% prop-heading "springDamping" %}}
> **float**

### {{% prop-heading "springMinThresholdAngle" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CameraRecoilData](/vext/ref/fb/camerarecoildata) type.

