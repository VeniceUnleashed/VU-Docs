---
title: DogTagData
---

Inherits from 
[UnlockAssetBase](/vext/ref/fb/unlockassetbase)

## Summary
### Constructors
| |
| ----------- |
| **[DogTagData](#constructor-0)**() |
| **[DogTagData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DogTagData](#constructor-2)**(other: [UnlockAssetBase](/vext/ref/fb/unlockassetbase)) |
| **[DogTagData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DogTagData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nameSID" >}} | string |
| {{< prop "descriptionSID" >}} | string |
| {{< prop "imageName" >}} | string |
| {{< prop "smallImageName" >}} | string |
| {{< prop "category" >}} | [DogTagCategory](/vext/ref/fb/dogtagcategory) |
| {{< prop "invertText" >}} | bool |
| {{< prop "isAlwaysAvailable" >}} | bool |
| {{< prop "excludedOnXenon" >}} | bool |
| {{< prop "excludedOnPs3" >}} | bool |
| {{< prop "excludedOnWin32" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DogTagData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DogTagData {#constructor-0}
> **DogTagData**()

Creates a new [DogTagData](/vext/ref/fb/dogtagdata) frostbite instance.

### DogTagData {#constructor-1}
> **DogTagData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DogTagData](/vext/ref/fb/dogtagdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DogTagData {#constructor-2}
> **DogTagData**(other: [UnlockAssetBase](/vext/ref/fb/unlockassetbase))

Casts an instance of type [UnlockAssetBase](/vext/ref/fb/unlockassetbase) to [DogTagData](/vext/ref/fb/dogtagdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) | The instance to cast to [DogTagData](/vext/ref/fb/dogtagdata). |

### DogTagData {#constructor-3}
> **DogTagData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DogTagData](/vext/ref/fb/dogtagdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DogTagData](/vext/ref/fb/dogtagdata). |

### DogTagData {#constructor-4}
> **DogTagData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DogTagData](/vext/ref/fb/dogtagdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DogTagData](/vext/ref/fb/dogtagdata). |

## Properties
### {{% prop-heading "nameSID" %}}
> **string**

### {{% prop-heading "descriptionSID" %}}
> **string**

### {{% prop-heading "imageName" %}}
> **string**

### {{% prop-heading "smallImageName" %}}
> **string**

### {{% prop-heading "category" %}}
> **[DogTagCategory](/vext/ref/fb/dogtagcategory)**

### {{% prop-heading "invertText" %}}
> **bool**

### {{% prop-heading "isAlwaysAvailable" %}}
> **bool**

### {{% prop-heading "excludedOnXenon" %}}
> **bool**

### {{% prop-heading "excludedOnPs3" %}}
> **bool**

### {{% prop-heading "excludedOnWin32" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DogTagData](/vext/ref/fb/dogtagdata) type.

