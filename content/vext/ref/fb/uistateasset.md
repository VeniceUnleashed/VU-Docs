---
title: UIStateAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIStateAsset](#constructor-0)**() |
| **[UIStateAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIStateAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIStateAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "uiComponents" >}} | [UIComponentData](/vext/ref/fb/uicomponentdata)[] |
| {{< prop "actionscriptLibraries" >}} | [UIAsset](/vext/ref/fb/uiasset)[] |
| {{< prop "actionscriptNames" >}} | string[] |
| {{< prop "stateName" >}} | string |
| {{< prop "statePath" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIStateAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIStateAsset {#constructor-0}
> **UIStateAsset**()

Creates a new [UIStateAsset](/vext/ref/fb/uistateasset) frostbite instance.

### UIStateAsset {#constructor-1}
> **UIStateAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIStateAsset](/vext/ref/fb/uistateasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIStateAsset {#constructor-2}
> **UIStateAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIStateAsset](/vext/ref/fb/uistateasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIStateAsset](/vext/ref/fb/uistateasset). |

### UIStateAsset {#constructor-3}
> **UIStateAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIStateAsset](/vext/ref/fb/uistateasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIStateAsset](/vext/ref/fb/uistateasset). |

## Properties
### {{% prop-heading "uiComponents" %}}
> **[UIComponentData](/vext/ref/fb/uicomponentdata)**[]

### {{% prop-heading "actionscriptLibraries" %}}
> **[UIAsset](/vext/ref/fb/uiasset)**[]

### {{% prop-heading "actionscriptNames" %}}
> **string**[]

### {{% prop-heading "stateName" %}}
> **string**

### {{% prop-heading "statePath" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIStateAsset](/vext/ref/fb/uistateasset) type.

