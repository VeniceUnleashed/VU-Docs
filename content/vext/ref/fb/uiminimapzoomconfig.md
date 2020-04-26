---
title: UIMinimapZoomConfig
---


## Summary
### Constructors
| |
| ----------- |
| **[UIMinimapZoomConfig](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "state" >}} | [UIMinimapZoomState](/vext/ref/fb/uiminimapzoomstate) |
| {{< prop "data" >}} | [MinimapData](/vext/ref/fb/minimapdata) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapZoomConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIMinimapZoomConfig {#constructor-0}
> **UIMinimapZoomConfig**()

Creates a new [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) frostbite structure.

## Properties
### {{% prop-heading "state" %}}
> **[UIMinimapZoomState](/vext/ref/fb/uiminimapzoomstate)**

### {{% prop-heading "data" %}}
> **[MinimapData](/vext/ref/fb/minimapdata)**

## Methods
### Clone
> **Clone**(): [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) type.

