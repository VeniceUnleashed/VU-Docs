---
title: HudData
---


## Summary
### Constructors
| |
| ----------- |
| **[HudData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "crosshairScaleMin" >}} | float |
| {{< prop "crosshairScaleMax" >}} | float |
| {{< prop "crosshairOpacityMin" >}} | float |
| {{< prop "crosshairOpacityMax" >}} | float |
| {{< prop "crosshairOpacityModifier" >}} | float |
| {{< prop "crosshairTypeId" >}} | string |
| {{< prop "weaponClass" >}} | string |
| {{< prop "cameraShakeModifier" >}} | float |
| {{< prop "seaLevelAltFreq" >}} | float |
| {{< prop "lowAmmoWarning" >}} | float |
| {{< prop "reloadPrompt" >}} | float |
| {{< prop "renderTargetIndex" >}} | int |
| {{< prop "hudPropertyList" >}} | [UIPartPropertyList](/vext/ref/fb/uipartpropertylist) \| nil |
| {{< prop "showMinimap" >}} | bool |
| {{< prop "infiniteAmmo" >}} | bool |
| {{< prop "hideCrosshairWhenAimOnFriend" >}} | bool |
| {{< prop "hideAmmo" >}} | bool |
| {{< prop "useRangeMeter" >}} | bool |
| {{< prop "usePredictedSight" >}} | bool |
| {{< prop "useWeaponOrientations" >}} | bool |
| {{< prop "useVelocityVectorMarker" >}} | bool |
| {{< prop "useLockingController" >}} | bool |
| {{< prop "useThrust" >}} | bool |
| {{< prop "useGForce" >}} | bool |
| {{< prop "useSkidSlip" >}} | bool |
| {{< prop "useClimbRate" >}} | bool |
| {{< prop "useAimWarning" >}} | bool |
| {{< prop "useRenderTarget" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [HudData](/vext/ref/fb/huddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HudData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HudData {#constructor-0}
> **HudData**()

Creates a new [HudData](/vext/ref/fb/huddata) frostbite structure.

## Properties
### {{% prop-heading "crosshairScaleMin" %}}
> **float**

### {{% prop-heading "crosshairScaleMax" %}}
> **float**

### {{% prop-heading "crosshairOpacityMin" %}}
> **float**

### {{% prop-heading "crosshairOpacityMax" %}}
> **float**

### {{% prop-heading "crosshairOpacityModifier" %}}
> **float**

### {{% prop-heading "crosshairTypeId" %}}
> **string**

### {{% prop-heading "weaponClass" %}}
> **string**

### {{% prop-heading "cameraShakeModifier" %}}
> **float**

### {{% prop-heading "seaLevelAltFreq" %}}
> **float**

### {{% prop-heading "lowAmmoWarning" %}}
> **float**

### {{% prop-heading "reloadPrompt" %}}
> **float**

### {{% prop-heading "renderTargetIndex" %}}
> **int**

### {{% prop-heading "hudPropertyList" %}}
> **[UIPartPropertyList](/vext/ref/fb/uipartpropertylist)** | **nil**

### {{% prop-heading "showMinimap" %}}
> **bool**

### {{% prop-heading "infiniteAmmo" %}}
> **bool**

### {{% prop-heading "hideCrosshairWhenAimOnFriend" %}}
> **bool**

### {{% prop-heading "hideAmmo" %}}
> **bool**

### {{% prop-heading "useRangeMeter" %}}
> **bool**

### {{% prop-heading "usePredictedSight" %}}
> **bool**

### {{% prop-heading "useWeaponOrientations" %}}
> **bool**

### {{% prop-heading "useVelocityVectorMarker" %}}
> **bool**

### {{% prop-heading "useLockingController" %}}
> **bool**

### {{% prop-heading "useThrust" %}}
> **bool**

### {{% prop-heading "useGForce" %}}
> **bool**

### {{% prop-heading "useSkidSlip" %}}
> **bool**

### {{% prop-heading "useClimbRate" %}}
> **bool**

### {{% prop-heading "useAimWarning" %}}
> **bool**

### {{% prop-heading "useRenderTarget" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [HudData](/vext/ref/fb/huddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[HudData](/vext/ref/fb/huddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HudData](/vext/ref/fb/huddata) type.

