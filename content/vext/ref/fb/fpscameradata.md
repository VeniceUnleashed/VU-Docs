---
title: FPSCameraData
---

Inherits from 
[TargetCameraData](/vext/ref/fb/targetcameradata)

## Summary
### Constructors
| |
| ----------- |
| **[FPSCameraData](#constructor-0)**() |
| **[FPSCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FPSCameraData](#constructor-2)**(other: [TargetCameraData](/vext/ref/fb/targetcameradata)) |
| **[FPSCameraData](#constructor-3)**(other: [CameraData](/vext/ref/fb/cameradata)) |
| **[FPSCameraData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FPSCameraData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FPSCameraData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "turnEffectSettings" >}} | [TurnEffectData](/vext/ref/fb/turneffectdata) |
| {{< prop "blurEffectSettings" >}} | [BlurEffectData](/vext/ref/fb/blureffectdata) |
| {{< prop "fov" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FPSCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FPSCameraData {#constructor-0}
> **FPSCameraData**()

Creates a new [FPSCameraData](/vext/ref/fb/fpscameradata) frostbite instance.

### FPSCameraData {#constructor-1}
> **FPSCameraData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FPSCameraData](/vext/ref/fb/fpscameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FPSCameraData {#constructor-2}
> **FPSCameraData**(other: [TargetCameraData](/vext/ref/fb/targetcameradata))

Casts an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata) to [FPSCameraData](/vext/ref/fb/fpscameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TargetCameraData](/vext/ref/fb/targetcameradata) | The instance to cast to [FPSCameraData](/vext/ref/fb/fpscameradata). |

### FPSCameraData {#constructor-3}
> **FPSCameraData**(other: [CameraData](/vext/ref/fb/cameradata))

Casts an instance of type [CameraData](/vext/ref/fb/cameradata) to [FPSCameraData](/vext/ref/fb/fpscameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraData](/vext/ref/fb/cameradata) | The instance to cast to [FPSCameraData](/vext/ref/fb/fpscameradata). |

### FPSCameraData {#constructor-4}
> **FPSCameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FPSCameraData](/vext/ref/fb/fpscameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FPSCameraData](/vext/ref/fb/fpscameradata). |

### FPSCameraData {#constructor-5}
> **FPSCameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FPSCameraData](/vext/ref/fb/fpscameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FPSCameraData](/vext/ref/fb/fpscameradata). |

### FPSCameraData {#constructor-6}
> **FPSCameraData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FPSCameraData](/vext/ref/fb/fpscameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FPSCameraData](/vext/ref/fb/fpscameradata). |

## Properties
### {{% prop-heading "turnEffectSettings" %}}
> **[TurnEffectData](/vext/ref/fb/turneffectdata)**

### {{% prop-heading "blurEffectSettings" %}}
> **[BlurEffectData](/vext/ref/fb/blureffectdata)**

### {{% prop-heading "fov" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FPSCameraData](/vext/ref/fb/fpscameradata) type.

