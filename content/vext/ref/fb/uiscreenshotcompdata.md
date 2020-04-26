---
title: UIScreenshotCompData
---

Inherits from 
[UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary
### Constructors
| |
| ----------- |
| **[UIScreenshotCompData](#constructor-0)**() |
| **[UIScreenshotCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIScreenshotCompData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UIScreenshotCompData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIScreenshotCompData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "resizeImageWidth" >}} | int |
| {{< prop "screenshotInfos" >}} | [ScreenshotInfo](/vext/ref/fb/screenshotinfo)[] |
| {{< prop "resizeImageHeight" >}} | int |
| {{< prop "autoResizeImage" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIScreenshotCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIScreenshotCompData {#constructor-0}
> **UIScreenshotCompData**()

Creates a new [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata) frostbite instance.

### UIScreenshotCompData {#constructor-1}
> **UIScreenshotCompData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIScreenshotCompData {#constructor-2}
> **UIScreenshotCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata). |

### UIScreenshotCompData {#constructor-3}
> **UIScreenshotCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata). |

### UIScreenshotCompData {#constructor-4}
> **UIScreenshotCompData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata). |

## Properties
### {{% prop-heading "resizeImageWidth" %}}
> **int**

### {{% prop-heading "screenshotInfos" %}}
> **[ScreenshotInfo](/vext/ref/fb/screenshotinfo)**[]

### {{% prop-heading "resizeImageHeight" %}}
> **int**

### {{% prop-heading "autoResizeImage" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIScreenshotCompData](/vext/ref/fb/uiscreenshotcompdata) type.

