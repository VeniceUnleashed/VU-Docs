---
title: CustomizeCharacterData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[CustomizeCharacterData](#constructor-0)**() |
| **[CustomizeCharacterData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CustomizeCharacterData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[CustomizeCharacterData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "visualGroups" >}} | [CustomizeVisual](/vext/ref/fb/customizevisual)[] |
| {{< prop "overrideCriticalHealthThreshold" >}} | float |
| {{< prop "unlocks" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase)[] |
| {{< prop "overrideMaxHealth" >}} | float |
| {{< prop "clearVisualState" >}} | bool |
| {{< prop "restoreToOriginalVisualState" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CustomizeCharacterData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CustomizeCharacterData {#constructor-0}
> **CustomizeCharacterData**()

Creates a new [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata) frostbite instance.

### CustomizeCharacterData {#constructor-1}
> **CustomizeCharacterData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CustomizeCharacterData {#constructor-2}
> **CustomizeCharacterData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata). |

### CustomizeCharacterData {#constructor-3}
> **CustomizeCharacterData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata). |

## Properties
### {{% prop-heading "visualGroups" %}}
> **[CustomizeVisual](/vext/ref/fb/customizevisual)**[]

### {{% prop-heading "overrideCriticalHealthThreshold" %}}
> **float**

### {{% prop-heading "unlocks" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)**[]

### {{% prop-heading "overrideMaxHealth" %}}
> **float**

### {{% prop-heading "clearVisualState" %}}
> **bool**

### {{% prop-heading "restoreToOriginalVisualState" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CustomizeCharacterData](/vext/ref/fb/customizecharacterdata) type.

