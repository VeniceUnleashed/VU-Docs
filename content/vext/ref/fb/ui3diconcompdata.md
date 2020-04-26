---
title: UI3dIconCompData
---

Inherits from 
[UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary
### Constructors
| |
| ----------- |
| **[UI3dIconCompData](#constructor-0)**() |
| **[UI3dIconCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UI3dIconCompData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UI3dIconCompData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UI3dIconCompData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "pixelOffset" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "iconSize" >}} | float |
| {{< prop "maxFarFade" >}} | float |
| {{< prop "maxCloseFade" >}} | float |
| {{< prop "snapSafeZone" >}} | float |
| {{< prop "snapCenterYOffset" >}} | float |
| {{< prop "shrinkSnapAnimationTime" >}} | float |
| {{< prop "trackerHudRadiusX" >}} | float |
| {{< prop "trackerHudRadiusY" >}} | float |
| {{< prop "maxLookAtThreshold" >}} | float |
| {{< prop "minLookAtThreshold" >}} | float |
| {{< prop "minLookAtThresholdDistance" >}} | float |
| {{< prop "drawDistance" >}} | float |
| {{< prop "fadeDistance" >}} | float |
| {{< prop "fadeEndDistance" >}} | float |
| {{< prop "minimumDrawDistance" >}} | float |
| {{< prop "minimumFadeDistance" >}} | float |
| {{< prop "maxTagUpdatesPerFrame" >}} | int |
| {{< prop "verticalOffset" >}} | float |
| {{< prop "showLabelRange" >}} | float |
| {{< prop "teamRadioDistance" >}} | float |
| {{< prop "scaleDistance" >}} | float |
| {{< prop "maxScaleMod" >}} | float |
| {{< prop "maxXRotation" >}} | float |
| {{< prop "maxYRotation" >}} | float |
| {{< prop "horisontalOffset" >}} | float |
| {{< prop "showSupportAmmoThreshold" >}} | float |
| {{< prop "verticalOffsetMaxOffset" >}} | float |
| {{< prop "verticalOffsetScaleFactor" >}} | float |
| {{< prop "showEngineerArmorThreshold" >}} | float |
| {{< prop "showMedicHealthThreshold" >}} | float |
| {{< prop "snapIcons" >}} | bool |
| {{< prop "circularSnap" >}} | bool |
| {{< prop "onlyShowSnapped" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UI3dIconCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UI3dIconCompData {#constructor-0}
> **UI3dIconCompData**()

Creates a new [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata) frostbite instance.

### UI3dIconCompData {#constructor-1}
> **UI3dIconCompData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UI3dIconCompData {#constructor-2}
> **UI3dIconCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata). |

### UI3dIconCompData {#constructor-3}
> **UI3dIconCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata). |

### UI3dIconCompData {#constructor-4}
> **UI3dIconCompData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata). |

## Properties
### {{% prop-heading "pixelOffset" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "iconSize" %}}
> **float**

### {{% prop-heading "maxFarFade" %}}
> **float**

### {{% prop-heading "maxCloseFade" %}}
> **float**

### {{% prop-heading "snapSafeZone" %}}
> **float**

### {{% prop-heading "snapCenterYOffset" %}}
> **float**

### {{% prop-heading "shrinkSnapAnimationTime" %}}
> **float**

### {{% prop-heading "trackerHudRadiusX" %}}
> **float**

### {{% prop-heading "trackerHudRadiusY" %}}
> **float**

### {{% prop-heading "maxLookAtThreshold" %}}
> **float**

### {{% prop-heading "minLookAtThreshold" %}}
> **float**

### {{% prop-heading "minLookAtThresholdDistance" %}}
> **float**

### {{% prop-heading "drawDistance" %}}
> **float**

### {{% prop-heading "fadeDistance" %}}
> **float**

### {{% prop-heading "fadeEndDistance" %}}
> **float**

### {{% prop-heading "minimumDrawDistance" %}}
> **float**

### {{% prop-heading "minimumFadeDistance" %}}
> **float**

### {{% prop-heading "maxTagUpdatesPerFrame" %}}
> **int**

### {{% prop-heading "verticalOffset" %}}
> **float**

### {{% prop-heading "showLabelRange" %}}
> **float**

### {{% prop-heading "teamRadioDistance" %}}
> **float**

### {{% prop-heading "scaleDistance" %}}
> **float**

### {{% prop-heading "maxScaleMod" %}}
> **float**

### {{% prop-heading "maxXRotation" %}}
> **float**

### {{% prop-heading "maxYRotation" %}}
> **float**

### {{% prop-heading "horisontalOffset" %}}
> **float**

### {{% prop-heading "showSupportAmmoThreshold" %}}
> **float**

### {{% prop-heading "verticalOffsetMaxOffset" %}}
> **float**

### {{% prop-heading "verticalOffsetScaleFactor" %}}
> **float**

### {{% prop-heading "showEngineerArmorThreshold" %}}
> **float**

### {{% prop-heading "showMedicHealthThreshold" %}}
> **float**

### {{% prop-heading "snapIcons" %}}
> **bool**

### {{% prop-heading "circularSnap" %}}
> **bool**

### {{% prop-heading "onlyShowSnapped" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata) type.

