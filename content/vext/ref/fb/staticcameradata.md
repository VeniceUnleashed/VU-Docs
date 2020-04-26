---
title: StaticCameraData
---

Inherits from 
[TargetCameraData](/vext/ref/fb/targetcameradata)

## Summary
### Constructors
| |
| ----------- |
| **[StaticCameraData](#constructor-0)**() |
| **[StaticCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StaticCameraData](#constructor-2)**(other: [TargetCameraData](/vext/ref/fb/targetcameradata)) |
| **[StaticCameraData](#constructor-3)**(other: [CameraData](/vext/ref/fb/cameradata)) |
| **[StaticCameraData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[StaticCameraData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[StaticCameraData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "leftCurve" >}} | [Vec3](/vext/ref/shared/class/vec3)[] |
| {{< prop "rightCurve" >}} | [Vec3](/vext/ref/shared/class/vec3)[] |
| {{< prop "upCurve" >}} | [Vec3](/vext/ref/shared/class/vec3)[] |
| {{< prop "downCurve" >}} | [Vec3](/vext/ref/shared/class/vec3)[] |
| {{< prop "upPitchAngle" >}} | float |
| {{< prop "yawInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "loosePartPhysics" >}} | [CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata)[] |
| {{< prop "leftYawAngle" >}} | float |
| {{< prop "rightYawAngle" >}} | float |
| {{< prop "pitchSensitivityZoomed" >}} | float |
| {{< prop "downPitchAngle" >}} | float |
| {{< prop "averageFilterFrames" >}} | int |
| {{< prop "pitchInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "yawSensitivityZoomed" >}} | float |
| {{< prop "pitchSensitivityNonZoomed" >}} | float |
| {{< prop "yawSensitivityNonZoomed" >}} | float |
| {{< prop "resetAccumulatedInputOnViewChange" >}} | bool |
| {{< prop "mirrorHorizontalCurves" >}} | bool |
| {{< prop "accumulateInput" >}} | bool |
| {{< prop "mirrorVerticalCurves" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StaticCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StaticCameraData {#constructor-0}
> **StaticCameraData**()

Creates a new [StaticCameraData](/vext/ref/fb/staticcameradata) frostbite instance.

### StaticCameraData {#constructor-1}
> **StaticCameraData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StaticCameraData](/vext/ref/fb/staticcameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StaticCameraData {#constructor-2}
> **StaticCameraData**(other: [TargetCameraData](/vext/ref/fb/targetcameradata))

Casts an instance of type [TargetCameraData](/vext/ref/fb/targetcameradata) to [StaticCameraData](/vext/ref/fb/staticcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TargetCameraData](/vext/ref/fb/targetcameradata) | The instance to cast to [StaticCameraData](/vext/ref/fb/staticcameradata). |

### StaticCameraData {#constructor-3}
> **StaticCameraData**(other: [CameraData](/vext/ref/fb/cameradata))

Casts an instance of type [CameraData](/vext/ref/fb/cameradata) to [StaticCameraData](/vext/ref/fb/staticcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CameraData](/vext/ref/fb/cameradata) | The instance to cast to [StaticCameraData](/vext/ref/fb/staticcameradata). |

### StaticCameraData {#constructor-4}
> **StaticCameraData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [StaticCameraData](/vext/ref/fb/staticcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [StaticCameraData](/vext/ref/fb/staticcameradata). |

### StaticCameraData {#constructor-5}
> **StaticCameraData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [StaticCameraData](/vext/ref/fb/staticcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [StaticCameraData](/vext/ref/fb/staticcameradata). |

### StaticCameraData {#constructor-6}
> **StaticCameraData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticCameraData](/vext/ref/fb/staticcameradata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StaticCameraData](/vext/ref/fb/staticcameradata). |

## Properties
### {{% prop-heading "leftCurve" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**[]

### {{% prop-heading "rightCurve" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**[]

### {{% prop-heading "upCurve" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**[]

### {{% prop-heading "downCurve" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**[]

### {{% prop-heading "upPitchAngle" %}}
> **float**

### {{% prop-heading "yawInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "loosePartPhysics" %}}
> **[CameraLoosePartPhysicsData](/vext/ref/fb/cameraloosepartphysicsdata)**[]

### {{% prop-heading "leftYawAngle" %}}
> **float**

### {{% prop-heading "rightYawAngle" %}}
> **float**

### {{% prop-heading "pitchSensitivityZoomed" %}}
> **float**

### {{% prop-heading "downPitchAngle" %}}
> **float**

### {{% prop-heading "averageFilterFrames" %}}
> **int**

### {{% prop-heading "pitchInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "yawSensitivityZoomed" %}}
> **float**

### {{% prop-heading "pitchSensitivityNonZoomed" %}}
> **float**

### {{% prop-heading "yawSensitivityNonZoomed" %}}
> **float**

### {{% prop-heading "resetAccumulatedInputOnViewChange" %}}
> **bool**

### {{% prop-heading "mirrorHorizontalCurves" %}}
> **bool**

### {{% prop-heading "accumulateInput" %}}
> **bool**

### {{% prop-heading "mirrorVerticalCurves" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StaticCameraData](/vext/ref/fb/staticcameradata) type.

