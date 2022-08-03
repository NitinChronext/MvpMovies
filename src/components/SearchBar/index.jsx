import React, { useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { Search } from './SearchIcon';
import { useDebouncedCallback } from 'use-debounce';
import ClearInputButton from './ClearInputButton';

import { SearchBarWrapper, SearchInput, SearchIconWrapper } from './styles';

const emptyFunct = () => {};

const SearchBar = ({
  onChangeText = emptyFunct,
  searchPlaceholder,
  onClearInput = emptyFunct,
}) => {
  const searchInputRef = useRef();
  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const onSearch = useDebouncedCallback(val => {
    onChangeText(val);
  }, 100);

  const clearInput = () => {
    searchInputRef.current.clear();
    onClearInput();
    setShowSearchIcon(true);
    Keyboard.dismiss();
  };
  return (
    <SearchBarWrapper>
      {showSearchIcon && (
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
      )}
      <SearchInput
        placeholder={searchPlaceholder}
        onChangeText={onSearch}
        onFocus={focus => {
          setShowSearchIcon(!focus);
        }}
        ref={searchInputRef}
      />
      {!showSearchIcon && (
        <ClearInputButton
          onPress={clearInput}
          extraStyle={{ marginRight: 10 }}
        />
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
